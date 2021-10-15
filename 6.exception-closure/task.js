function parseCount(value) {
    let parseResult = Number.parseInt(value);

    if (isNaN(parseResult)) {
        throw new Error('Невалидное значение');
    } else {
        return parseResult
    }
}

function validateCount(newValue) {
    try {
        let newParseResult = parseCount(newValue);
        return newParseResult;
    } catch (err) {
        return err
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;

    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));

        return parseFloat(area.toFixed(3))
    }

}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch {
        return { getPerimeter: () => 'Ошибка! Треугольник не существует', getArea: () => 'Ошибка! Треугольник не существует' }
    }
}

