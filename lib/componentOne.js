'use strict';

import $ from 'jquery';
import DateWidget from './date-widget.js'

export function bootstrap() {
  document.registerElement('date-widget', DateWidget);
  
  console.log(`jQuery version is: ${$.fn.jquery}!`);
};
