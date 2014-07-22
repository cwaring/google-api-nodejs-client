/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Email Migration API v2
 *
 * @classdesc Email Migration API lets you migrate emails of users to Google backends.
 * @namespace admin
 * @version  email_migration_v2
 * @variation email_migration_v2
 * @this Admin
 * @param {object=} options Options for Admin
 */
function Admin(options) {

  var self = this;
  this._options = options || {};

  this.mail = {

    /**
     * emailMigration.mail.insert
     *
     * @desc Insert Mail into Google's Gmail backends
     *
     * @alias emailMigration.mail.insert
     * @memberOf! admin(email_migration_v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - The email or immutable id of the user
     * @param  {object}        params.resource - Media resource metadata
     * @param  {string|object} params.media - Media body data to upload
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userKey']);
      var isMedia = true;
      var options = {
        url: 'https://www.googleapis.com/upload/email/v2/users/' + params.userKey + '/mail',
        method: 'POST'
      };

      delete params.userKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Admin object
 * @type Admin
 */
module.exports = Admin;