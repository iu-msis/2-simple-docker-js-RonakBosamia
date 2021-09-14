const randoUser = () => {
    fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((data) => console.log(data));
};

randoUser();