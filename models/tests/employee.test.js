const expect = require('chai').expect;
const Employee = require('../employee.model.js');

describe('Employee', () => {
    it('should throw an error if no arg"', () => {
        const emp = new Employee({});

        emp.validate((err) => {
            expect(err.errors.firstName).to.exist;
            expect(err.errors.lastName).to.exist;
            expect(err.errors.department).to.exist;
        });
    });

    it('should throw an error if there is lack of 1 "arg"', () => {
        const emp = new Employee({ firstName: 'Pedro', lastName: 'Wills' });
        emp.validate((err) => {
            expect(err.errors.department).to.exist;
        });
    });

    it('should throw an error if "arg" are not string', () => {
        const cases = [{}, []];

        for (const name of cases) {
            const emp = new Employee({ name });

            emp.validate((err) => {
                expect(err.errors.firstName).to.exist;
                expect(err.errors.lastName).to.exist;
                expect(err.errors.department).to.exist;
            });
        }
    });

    it('should not throw an error if "arg" is okay', () => {
        const emp = new Employee({ firstName: 'Eduardo', lastName: 'Oregon', department: 'IT' });

        emp.validate((err) => {
            expect(err).to.not.exist;
        });
    });
});