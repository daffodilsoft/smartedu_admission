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
        'web',
        'base',
        'mail',
        'smartedu_core',
        'smartedu_semester',
        'website', 
    ],

    # always loaded
    'data': [

        # security
        # 'security/ir.model.access.csv',

        # mail templates
        'data/admission_confirm_mail_template.xml',
        'data/applicant_mail_template.xml',
        # 'data/applicant_mail_template_old.xml',
        'data/official_email_generation_mail_template.xml',

        # views
        'views/se_admission_form_template.xml',
        'views/se_admission_session_view.xml',
        'views/se_admission_form_fee_view.xml',
        'views/se_application_view.xml',
        'views/se_program_type.xml',
        # 'views/assets.xml',

        # Wizards
        'wizards/student_email_proposed_wizard.xml',
        'wizards/admission_fee_allow_payment_amount_wizard.xml',
        'wizards/student_id_wizard.xml',

        # menus
        'views/menus.xml',
    ],
    
    'assets': {
        'web.assets_backend': [
            'smartedu_admission/static/src/js/custom_graph_view.js',
            # 'custom_dashboard/static/src/xml/dashboard.xml',
        ],
    },
    # only loaded in demonstration mode
    'demo': [
        # 'demo/demo.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
}
