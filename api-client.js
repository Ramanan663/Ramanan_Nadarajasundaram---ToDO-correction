const api_url = "https://jsonbox.io/box_d0b3a92be942afbb7920";

//get data
const getData = async() => {
    try {
        const response = await fetch(api_url);
        // console.log(response);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

//post data
const postData = async(data) => {
    try {
        const response = await fetch(api_url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        //console.log("this is post check", response);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

//delete data
const deleteData = async(id) => {
    try {
        const response = await fetch(
            `https://jsonbox.io/box_d0b3a92be942afbb7920/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        //   console.log("delete check ", response);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

//update the data
const updateData = async(id, data) => {
    try {
        const response = await fetch(
            `https://jsonbox.io/box_d0b3a92be942afbb7920/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};