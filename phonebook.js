function Phonebook() {
    this.contacts = [];
    
    this.addContact = function(name, number, email) {
        this.contacts.push({name, number, email});
    };
    
    this.search = function(name) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                console.log(`Yes, ${name} is in the contacts.`);
                return;
            }
        }
        console.log(`No, ${name} is not in the contacts.`);
    };
    
    this.updateContact = function(name, change) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                if (change.includes('@')) {
                    this.contacts[i].email = change;
                } else {
                    this.contacts[i].number = change;
                }
                console.log(`Updated contact information for ${name}.`);
                return;
            }
        }
        console.log(`No contact found with the name ${name}.`);
    };
    
    this.deleteContact = function(name) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                this.contacts.splice(i, 1);
                console.log(`Deleted contact ${name} successfully.`);
                return;
            }
        }
        console.log(`No contact found with the name ${name} to delete.`);
    };
}

const k = new Phonebook();
k.addContact("Nikita", 7888052240, 'nikita@123.gmail.com');
k.addContact("Nikhil", 7888052240, 'nikhita@678.gmail.com');
console.log(k.contacts);
k.search("Nikita");
k.search("kimaya");
k.updateContact("Nikita", 'nikita@gmail.com');
k.updateContact("kimaya", '1234567890');
console.log(k.contacts);
k.deleteContact("Nikhil");
console.log(k.contacts);
