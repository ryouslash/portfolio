import $ from 'jquery';

import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import {faPenNib, faCode, faServer,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faHandshake} from '@fortawesome/free-regular-svg-icons';

library.add(faEnvelope, faHandshake, faPenNib, faCode, faServer,faChevronDown);

dom.i2svg();
