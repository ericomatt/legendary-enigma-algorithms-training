const exactMatcher = (pattern:string, inputString: string) => {
    if(pattern.length !== inputString.length) return false
    return !!pattern.match(inputString)
}

const exactCounter = (pattern:string[], inputString:string)=> {
    return pattern.reduce((count, cur) => {
        if (exactMatcher(cur, inputString)) {
            return count + 1
        }
        return count
    }, 0)
}



describe('exact matcher', ()=> {

    it('should match exact length', function () {

        let pattern = ['aaa', 'aab', 'aaaa'];
        let inputString = 'aaa';

        expect(exactMatcher(pattern[0], inputString)).toBeTruthy()
        expect(exactMatcher(pattern[1], inputString)).toBeFalsy()
        expect(exactMatcher(pattern[2], inputString)).toBeFalsy()
    });
})

const optionalCharacterFinder = (pattern:string): boolean=> {
    return !!pattern.match(/\[/)

}

const optionalCharacterSubgroupGetter = (pattern:string): string=> {
    const res = pattern.match(/\[(.+)]/)
    //console.log(res)
    // @ts-ignore
    return res[1]

}

const optionalCharacterSubgroupCounter = (pattern:string[], inputString:string)=> {
    return 0
}


describe('string matcher counter', () => {

    it('should count exact match',()=> {

        let pattern = ['aaa', 'aab', 'aaaa','aab'];
        let inputString = 'aaa';
        let inputString2 = 'aab';

        expect(exactCounter(pattern, inputString)).toBe(1)
        expect(exactCounter(pattern, inputString2)).toBe(2)
    })

    it('should find optional character  ([ ])',()=> {
        expect(optionalCharacterFinder('aaaa')).toBeFalsy()
        expect(optionalCharacterFinder('aa[a]a')).toBeTruthy()
    })

    it('should get optional operator ([ ]) subgroup',()=> {
        expect(optionalCharacterSubgroupGetter('ab[vb]azxa')).toBe('vb')
        expect(optionalCharacterSubgroupGetter('aa[a]a')).toBe('a')
    })

    it('should count each optional subgroup', ()=> {
        let pattern = ['aaa', 'aa[ba]', 'aaaa','aab'];
        let inputString = 'aaa';
        let inputString2 = 'aab';
        expect(optionalCharacterSubgroupCounter(pattern, inputString)).toBe(2)
        expect(optionalCharacterSubgroupCounter(pattern, inputString2)).toBe(2)

    })

    it.todo('should match with negation operator')

})

export {}