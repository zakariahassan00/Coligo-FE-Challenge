/*
 * service that is used to get quiz data from the specified endpoint (url) using separated 
 * external http logic
 */

import * as HTTP from "./httpRequest";

// Fake endpoint
const url = "http://test.coligolms.com/api/quiz";

export const getQuizzes = () => HTTP.getAll(url).then(response => response);
