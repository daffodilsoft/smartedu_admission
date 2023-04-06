# -*- coding: utf-8 -*-
{
    'name': "Admission",

    'summary': " ",

    'description': " ",

    'author': " ",
    'website': " ",
    'category': 'Education',
    'version': '16.0.1',

    'depends': [
        'smartedu_core',
    ],

    # always loaded
    'data': [

        # security
        # 'security/ir.model.access.csv',

        # views
        'views/se_admission_session_view.xml',
        'views/se_batch_view.xml',
        'views/se_application_views.xml',

        # Wizards
        'wizards/student_email_proposed_wizard.xml',
        'wizards/admission_fee_allow_payment_amount_wizard.xml',
        'wizards/student_id_wizard.xml',

        # menus
        'views/menus.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
}
