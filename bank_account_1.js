class BankAcc { 
    constructor() {
        this.saldo = 0;
    }

    showSaldo() {
        const nilaiDispaly = document.getElementById('tampilanwebsaldo');
        nilaiDispaly.textContent = this.saldo;
    }

    tambahSaldo() {
        let inputSaldo = parseInt(prompt(`Saldo anda Rp${this.saldo}. Input penambahan saldo`));
        while (isNaN(inputSaldo) || inputSaldo <= 0) {
            if (inputSaldo <= 0)
                alert("Input harus lebih dari nol");
            else if (isNaN(inputSaldo)) {
                alert("Harap inputkan angka");
                }
            inputSaldo = parseInt(prompt(`Tambahkan jumlah saldo`));
        }
        this.saldo += inputSaldo;
        this.showSaldo();
        alert(`Saldo anda saat ini Rp${this.saldo}`);
    }

    kurangiSaldo() {
        if (this.saldo <= 0) {
            alert("Saldo belum ada");
        } else {
            let inputSaldo = parseInt(prompt(`Saldo anda Rp${this.saldo}. Input pengurangan saldo`));

            while (inputSaldo > this.saldo || isNaN(inputSaldo) || inputSaldo <= 0) {
                if (inputSaldo > this.saldo)
                    alert("Saldo dilarang defisit.");
                else if (isNaN(inputSaldo)) {
                    alert("Harap inputkan angka");
                } else if (inputSaldo <= 0){
                    alert("Input harus lebih dari nol")
                }
                inputSaldo = parseInt(prompt(`Saldo anda Rp${this.saldo}. Input pengurangan saldo`));
            } 
            if (inputSaldo <= this.saldo){
                this.saldo -= inputSaldo;
                this.showSaldo();
                alert(`Saldo anda saat ini Rp${this.saldo}`);
            }
        }
    }
}

const bank_account_obj = new BankAcc();