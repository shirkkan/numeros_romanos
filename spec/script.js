function RomanNumerals(n){

    this.n = n;
    this.base = {
                 1 : 'I',
                 2 : 'II',
                 3 : 'III',
                 4 : 'IV',
                 5 : 'V',
                 10 : 'X',
                 50 : 'L',
                 100 : 'C'
                };

    this.convertir = function()
    {
        var result = '';

        // 13 = XIII
        // 14 = IXV

        var bases = [];
        for(var k in this.base) bases.push(k);

        var bases = bases.reverse();

        for(var i = 0; i < bases.length; i++)
        {
            current_base = bases[i];

            var mod = this.n % current_base;
            var parte_entera = Math.floor(this.n / current_base);

            if(mod == 0)
            {

            }

            else if(mod != this.n)
            {
                // 14 % 10 = 4
                // 14 / 10  = 1.4
                // 84 = LXXXIV
                // 14 = XIV
                result += this.base[current_base];

                this.n -= current_base;
            }

        }

/*

        if(this.n <= 3)
        {
            for(var i = 1; i<=this.n; i++)
            {
                result += 'I';
            }
        }
        else if(this.n == 5)
            result = 'V';
        else if(this.n == 10)
            result = 'X';
        else if(this.n == 50)
            result = 'L';
        else if(this.n == 100)
            result = 'C';
*/
        return result;
    }
}

describe("Números romanos", function() {

    it("comprobar 1", function() {
        var result;
        var c = new RomanNumerals(1);
        result = c.convertir();
        expect('I').toBe(result);

    });

    it("comprobar 2", function(){
        var result;
        c = new RomanNumerals(2);
        result = c.convertir();
        expect('II').toBe(result);
    });

    it("comprobar 3", function(){
        var result;
        c = new RomanNumerals(3);
        result = c.convertir();
        expect('III').toBe(result);
    });

    it("comprobar 5", function(){
        var result;
        c = new RomanNumerals(5);
        result = c.convertir();
        expect('V').toBe(result);
    });

    it("comprobar 10", function(){
        var result;
        c = new RomanNumerals(10);
        result = c.convertir();
        expect('X').toBe(result);
    });

    it("comprobar 50", function(){
        var result;
        c = new RomanNumerals(50);
        result = c.convertir();
        expect('L').toBe(result);
    });

    it("comprobar 100", function(){
        var result;
        c = new RomanNumerals(100);
        result = c.convertir();
        expect('C').toBe(result);
    });



});

