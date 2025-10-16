describe('Arithmetic', function () {
    describe('Validation', function () {
        it('rejects missing operation', function (done) {
            request.get('/arithmetic?operand1=21&operand2=21')
                .expect(400)
                .end(function (err, res) {
                    expect(res.body).to.eql({ error: "Unspecified operation" });
                    done();
                });
        });
        it('rejects invalid operation', function (done) {
            request.get('/arithmetic?operation=foobar&operand1=21&operand2=21')
                .expect(400)
                .end(function (err, res) {
                    expect(res.body).to.eql({ error: "Invalid operation: foobar" });
                    done();
                });
        });
        it('rejects missing operand1', function (done) {
            request.get('/arithmetic?operation=add&operand2=21')
                .expect(400)
                .end(function (err, res) {
                    expect(res.body).to.eql({ error: "Invalid operand1: undefined" });
                    done();
                });
        });
        it('rejects operands with invalid sign', function (done) {
            request.get('/arithmetic?operation=add&operand1=4.2-1&operand2=4')
                .expect(400)
                .end(function (err, res) {
                    expect(res.body).to.eql({ error: "Invalid operand1: 4.2-1" });
                    done();
                });
        });
        it('rejects operands with invalid decimals', function (done) {
            request.get('/arithmetic?operation=add&operand1=4.2.1&operand2=4')
                .expect(400)
                .end(function (err, res) {
                    expect(res.body).to.eql({ error: "Invalid operand1: 4.2.1" });
                    done();
                });
        });
    });

    describe('Addition', function () {
        it('adds two positive integers', function (done) {
            request.get('/arithmetic?operation=add&operand1=21&operand2=21')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 42 });
                    done();
                });
        });
        it('adds zero to an integer', function (done) {
            request.get('/arithmetic?operation=add&operand1=42&operand2=0')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 42 });
                    done();
                });
        });
        it('adds a negative integer to a positive integer', function (done) {
            request.get('/arithmetic?operation=add&operand1=21&operand2=-42')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: -21 });
                    done();
                });
        });
        it('adds two negative integers', function (done) {
            request.get('/arithmetic?operation=add&operand1=-21&operand2=-21')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: -42 });
                    done();
                });
        });
        it('adds an integer to a floating point number', function (done) {
            request.get('/arithmetic?operation=add&operand1=2.5&operand2=-5')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: -2.5 });
                    done();
                // We recommend installing an extension to run mocha tests.

                describe('Arithmetic - additional tests', function () {
                    describe('Validation (additional)', function () {
                        it('rejects missing operand2', function (done) {
                            request.get('/arithmetic?operation=add&operand1=21')
                                .expect(400)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ error: "Invalid operand2: undefined" });
                                    done();
                                });
                        });

                        it('rejects empty operand1', function (done) {
                            request.get('/arithmetic?operation=add&operand1=&operand2=2')
                                .expect(400)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ error: "Invalid operand1: " });
                                    done();
                                });
                        });

                        it('rejects invalid exponent format', function (done) {
                            request.get('/arithmetic?operation=add&operand1=1.2e--5&operand2=1')
                                .expect(400)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ error: "Invalid operand1: 1.2e--5" });
                                    done();
                                });
                        });
                    });

                    describe('Addition (additional)', function () {
                        it('adds two positive decimals', function (done) {
                            request.get('/arithmetic?operation=add&operand1=.5&operand2=0.25')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: 0.75 });
                                    done();
                                });
                        });

                        it('accepts leading plus sign', function (done) {
                            request.get('/arithmetic?operation=add&operand1=%2B5&operand2=2')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: 7 });
                                    done();
                                });
                        });

                        it('adds using positive exponent notation', function (done) {
                            request.get('/arithmetic?operation=add&operand1=1.2e3&operand2=300')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: 1500 });
                                    done();
                                });
                        });
                    });

                    describe('Multiplication (additional)', function () {
                        it('multiplies by one returns same value', function (done) {
                            request.get('/arithmetic?operation=multiply&operand1=12345&operand2=1')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: 12345 });
                                    done();
                                });
                        });

                        it('multiplies negative decimal with positive decimal', function (done) {
                            request.get('/arithmetic?operation=multiply&operand1=-0.2&operand2=0.5')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: -0.1 });
                                    done();
                                });
                        });
                    });

                    describe('Division (additional)', function () {
                        it('divides a decimal by a decimal', function (done) {
                            request.get('/arithmetic?operation=divide&operand1=0.75&operand2=0.25')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: 3 });
                                    done();
                                });
                        });

                        it('divides a positive by a negative decimal', function (done) {
                            request.get('/arithmetic?operation=divide&operand1=1.5&operand2=-0.5')
                                .expect(200)
                                .end(function (err, res) {
                                    expect(res.body).to.eql({ result: -3 });
                                    done();
                                });
                        });
                    });
                });
                    done();
                });
        });
        it('multiplies a positive integer with zero', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=21&operand2=0')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 0 });
                    done();
                });
        });
        it('multiplies a positive integer and negative integer', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=21&operand2=-2')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: -42 });
                    done();
                });
        });
        it('multiplies two negative integers', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=-21&operand2=-2')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 42 });
                    done();
                });
        });
        it('multiplies two floating point numbers', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=.5&operand2=0.5')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 0.25 });
                    done();
                });
        });
        it('multiplies supporting exponential notation', function (done) {
            request.get('/arithmetic?operation=multiply&operand1=4.2e1&operand2=1e0')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 42 });
                    done();
                });
        });
    });

    describe('Division', function () {
        it('divides a positive integer by an integer factor ', function (done) {
            request.get('/arithmetic?operation=divide&operand1=42&operand2=2')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 21 });
                    done();
                });
        });
        it('divides a negative integer by an integer factor ', function (done) {
            request.get('/arithmetic?operation=divide&operand1=-42&operand2=2')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: -21 });
                    done();
                });
        });
        it('divides a positive integer by a non-factor', function (done) {
            request.get('/arithmetic?operation=divide&operand1=21&operand2=42')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 0.5 });
                    done();
                });
        });
        it('divides a positive integer by a negative integer', function (done) {
            request.get('/arithmetic?operation=divide&operand1=21&operand2=-42')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: -0.5 });
                    done();
                });
        });
        it('divides zero by a positive integer', function (done) {
            request.get('/arithmetic?operation=divide&operand1=0&operand2=42')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 0 });
                    done();
                });
        });
        it('divides by zero', function (done) {
            request.get('/arithmetic?operation=divide&operand1=0.5&operand2=2')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: 0.25 });
                    done();
                });
        });
        it('divides by zero', function (done) {
            request.get('/arithmetic?operation=divide&operand1=21&operand2=0')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.eql({ result: null });
                    done();
                });
        });
    });
});
