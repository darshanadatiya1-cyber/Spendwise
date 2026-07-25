let numbers = [];

async function getData() {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=8");
        const data = await response.json();

        numbers = data.products.map(item => item.price);

        showBars();
    } catch (error) {
        alert("Error fetching data");
    }
}

function showBars() {
    const bars = document.getElementById("bars");
    bars.innerHTML = "";

    numbers.forEach(num => {
        bars.innerHTML += `
        <div class="bar" style="height:${num * 2}px">
            ${num}
        </div>`;
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSort() {

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j < numbers.length - i - 1; j++) {

            if (numbers[j] > numbers[j + 1]) {

                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;

                showBars();

                await delay(500);
            }
        }
    }

    try {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                success: true,
                sortedArray: numbers
            })
        });

        alert("Sorting Completed!");
    } catch (error) {
        alert("POST request failed");
    }
}

getData();