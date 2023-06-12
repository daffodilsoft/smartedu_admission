odoo.define('smartedu_admission.CustomGraphView', function (require) {
    'use strict';

    var GraphView = require('web.GraphView');

    var CustomGraphView = GraphView.extend({
        init: function (viewInfo, params) {
            this._super.apply(this, arguments);

            // Customize the size of the graph view here
            this.graphHeight = 600;
            this.graphWidth = 800;
        },

        willStart: function () {
            var self = this;
            return this._super.apply(this, arguments).then(function () {
                // Customize the size of individual chart types (bar, line, pie) here
                self.chartOptions.bar.size = {width: 20, height: 400};
                self.chartOptions.line.size = {width: 800, height: 200};
                self.chartOptions.pie.size = {width: 600, height: 600};
            });
        },
    });

    return CustomGraphView;
});
