# -*- coding: utf-8 -*-
# from odoo import http


# class SeAdmission(http.Controller):
#     @http.route('/se_application/se_application', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/se_application/se_application/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('se_application.listing', {
#             'root': '/se_application/se_application',
#             'objects': http.request.env['se_application.se_application'].search([]),
#         })

#     @http.route('/se_application/se_application/objects/<model("se_application.se_application"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('se_application.object', {
#             'object': obj
#         })
