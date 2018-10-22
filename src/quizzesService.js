const URL = "http://test.coligolms.com/api/quiz";

// this service is responsible for getting all the quiz data from the fake end point (url)
export const getAll = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => data);
}

