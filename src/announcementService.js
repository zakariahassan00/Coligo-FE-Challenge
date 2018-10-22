/*
 * service that is used to get announcemet data from the specified endpoint (url) using separated 
 * external http logic
 */

import * as HTTP from './httpRequest';

// FAKE endpoint
const url = 'http://test.coligolms.com/api/announcement';

export const getAnnouncemets = () => 
    HTTP.getAll(url)
    .then(response => response)


