// const jokes = require('./joke');
import { jokes } from './joke';
import $ from 'jquery';
import fs from 'fs';

jokes.getOne()
.then(joke => {
    console.log(joke);
    $('#joke').text(joke.value.joke);
})

const copy = fs.readFileSync( __dirname + '/Copyright.txt', 'utf8');
$('#copy').text(copy);