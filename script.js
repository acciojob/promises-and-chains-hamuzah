document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('myForm');
            const nameInput = document.getElementById('name');
            const ageInput = document.getElementById('age');
            const btn = document.getElementById('btn');
 
            form.addEventListener('submit', function (event) {
                event.preventDefault();
 
                const name = nameInput.value;
                const age = parseInt(ageInput.value);
 
                if (!name || !age) {
                    alert('Please fill out all fields.');
                    return;
                }
 
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (age >= 18) {
                            alert(`Welcome, ${name}. You can vote.`);
                            resolve();
                        } else {
                            alert(`Oh sorry ${name}. You aren't old enough.`);
                            reject();
                        }
                    }, 4000);
                });
 
                promise.catch(() => {
                    // Handle promise rejection if needed
                });
            });
        });