/*                                            *\
** ------------------------------------------ **
**      PMFLOW -- Project Manager Flow        **
** ------------------------------------------ **
**  Copyright (c) 2017 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

(function() {
    // PMFlow Module
    var app = angular.module('PMFlow', ['ui.router']);

    // Load Controllers
    app.controller('__main__', ngLoadController('__main__'));

})();