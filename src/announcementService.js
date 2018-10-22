const URL = "http://test.coligolms.com/api/announcement";

// this service is responsible for getting all the announcements data from the fake end point (url)
export const getAll = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => data);
}

