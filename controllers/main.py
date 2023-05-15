from odoo import http
from odoo.http import request


class applications(http.Controller):
    @http.route('/see_application', type='http', auth='public', website=True)
    def app_form(self, **kw):
        
        students = request.env['se.application'].sudo().search([])
        return request.render('smartedu_admission.applications_page', {
            'students': students
        })
        
    # Redirect To  the Page
    @http.route('/student_form', auth='public', website=True)
    def hospital_patient_redirect(self, **kw):
        first_name = kw.get('first_name')
        middle_name = kw.get('middle_name')
        last_name = kw.get('last_name')
        email = kw.get('email')
        application_number= kw.get('application_number')
        admission_date= kw.get('admission_date')
        application_date= kw.get('application_date')
        gender=kw.get('gender')
        mobile=kw.get('mobile')
        academic_medium_type=kw.get('academic_medium_type')
        form_type=kw.get('form_type')
        birth_date=kw.get('birth_date')
        religion=kw.get('religion')
        marital_status=kw.get('marital_status')
        blood_group=kw.get('blood_group')
        email=kw.get('email')
        national_id_no=kw.get('national_id_no')
        # nationality=kw.get(nationality)
        passport_no=kw.get('passport_no')
        marital_status=kw.get('marital_status')
        national_country_id=kw.get('national_country_id')
        social_network=kw.get('social_network')
        signature=kw.get('signature')
        father_name=kw.get('father_name')
        father_contact_number=kw.get('father_contact_number')
        father_email=kw.get('father_email')
        father_national_id=kw.get('father_national_id')
        father_passport=kw.get('father_passport')
        father_birthday=kw.get('father_birthday')
        father_age=kw.get('father_age')
        father_occupation=kw.get('father_occupation')
        father_company=kw.get('father_company')
        father_designation=kw.get('father_designation')
        father_annual_income=kw.get('father_annual_income')
        mother_name=kw.get('mother_name')
        mother_contact_number=kw.get('mother_contact_number')
        mother_email=kw.get('mother_email')
        mother_national_id=kw.get('mother_national_id')
        mother_passport=kw.get('mother_passport')
        mother_birthday=kw.get('mother_birthday')
        mother_age=kw.get('mother_age')
        mother_occupation=kw.get('mother_occupation')
        mother_company=kw.get('mother_company')
        mother_designation=kw.get('mother_designation')
        mother_annual_income=kw.get('mother_annual_income')
        local_guardian_name=kw.get('local_guardian_name')
        local_guardian_contact_number=kw.get('local_guardian_contact_number')
        local_guardian_email=kw.get('local_guardian_email')
        local_guardian_national_id=kw.get('local_guardian_national_id')
        local_guardian_passport=kw.get('local_guardian_passport')
        local_guardian_street=kw.get('local_guardian_street')
        local_guardian_relation=kw.get('local_guardian_relation')
        life_insurance=kw.get('life_insurance')
        roll_number_ssc=kw.get('roll_number_ssc')
        ssc_grade=kw.get('ssc_grade')
        year_ssc=kw.get('year_ssc')
        registration_number_ssc=kw.get('registration_number_ssc')
        ssc_gpa=kw.get('ssc_gpa')
        ssc_certificate=kw.get('ssc_certificate')
        is_golden_ssc=kw.get('is_golden_ssc')
        year_hsc=kw.get('year_hsc')
        roll_number_hsc=kw.get('roll_number_hsc')
        hsc_gpa=kw.get('hsc_gpa')
        is_golden_hsc=kw.get('is_golden_hsc')
        hsc_certificate=kw.get('hsc_certificate')
        know_the_diu_from_website=kw.get('know_the_diu_from_website')
        know_the_diu_from_newspaper=kw.get('know_the_diu_from_newspaper')
        know_the_diu_from_social_media=kw.get('know_the_diu_from_social_media')
        know_the_diu_from_sms=kw.get('know_the_diu_from_sms')
        know_the_diu_from_daffodil_family=kw.get('know_the_diu_from_daffodil_family')
        know_the_diu_from_diu_student=kw.get('know_the_diu_from_diu_student')
        know_the_diu_from_diu_employee=kw.get('know_the_diu_from_diu_employee')
        know_the_diu_from_others=kw.get('know_the_diu_from_others')
        is_parents_freedom_fighter=kw.get('is_parents_freedom_fighter')
        is_tribal=kw.get('is_tribal')
        is_physical_disorder=kw.get('is_physical_disorder')
        is_first_division_player=kw.get('is_first_division_player')
        passport=kw.get('passport')
        emergency_contact_info=kw.get('emergency_contact_info')
        passport_expire_date=kw.get('passport_expire_date')
        visa_no=kw.get('visa_no')
        visa_expire_date=kw.get('visa_expire_date')
        # program_id=kw.get('program_id')
        applicant_type=kw.get('applicant_type')
        # program_type_id=kw.get('program_type_id')
        last_completed_degree=kw.get('last_completed_degree')
        
        request.env['se.application'].sudo().create({
            'first_name': first_name,
            'middle_name': middle_name,
            'last_name': last_name,
            'email': email,
            'application_number':application_number,
            'admission_date':admission_date,
            'application_date':application_date,
            'gender':gender,
            'mobile':mobile,
            'academic_medium_type':academic_medium_type,
            'form_type':form_type,
            'birth_date':birth_date,
            'religion': religion,
            'marital_status':marital_status,
            'blood_group':blood_group,
            
            'national_id_no':national_id_no,
            # 'nationality':nationality,
            'passport_no':passport_no,
            'marital_status':marital_status,
            'national_country_id':national_country_id,
            'social_network':social_network,
            'signature':signature,
            'father_name':father_name,
            'father_contact_number':father_contact_number,
            'father_email':father_email,
            'father_national_id':father_national_id,
            'father_passport':father_passport,
            'father_birthday':father_birthday,
            'father_age':father_age,
            'father_occupation':father_occupation,
            'father_company':father_company,
            'father_designation':father_designation,
            'father_annual_income':father_annual_income,
            'mother_name':mother_name,
            'mother_contact_number':mother_contact_number,
            'mother_email':mother_email,
            'mother_national_id':mother_national_id,
            'mother_passport':mother_passport,
            'mother_birthday':mother_birthday,
            'mother_age':mother_age,
            'mother_occupation':mother_occupation,
            'mother_company':mother_company,
            'mother_designation':mother_designation,
            'mother_annual_income':mother_annual_income,
            'local_guardian_name':local_guardian_name,
            'local_guardian_contact_number':local_guardian_contact_number,
            'local_guardian_email':local_guardian_email,
            'local_guardian_national_id':local_guardian_national_id,
            'local_guardian_passport':local_guardian_passport,
            'local_guardian_street':local_guardian_street,
            'local_guardian_relation':local_guardian_relation,
            'life_insurance':life_insurance,
            'roll_number_ssc':roll_number_ssc,
            'ssc_grade':ssc_grade,
            'year_ssc':year_ssc,
            'registration_number_ssc':registration_number_ssc,
            'ssc_gpa':ssc_gpa,
            'ssc_certificate':ssc_certificate,
            'is_golden_ssc':is_golden_ssc,
            'year_hsc':year_hsc,
            'roll_number_hsc':roll_number_hsc,
            'hsc_gpa':hsc_gpa,
            'is_golden_hsc':is_golden_hsc,
            'hsc_certificate':hsc_certificate,
            'know_the_diu_from_website':know_the_diu_from_website,
            'know_the_diu_from_newspaper':know_the_diu_from_newspaper,
            'know_the_diu_from_social_media':know_the_diu_from_social_media,
            'know_the_diu_from_sms':know_the_diu_from_sms,
            'know_the_diu_from_daffodil_family':know_the_diu_from_daffodil_family,
            'know_the_diu_from_diu_student':know_the_diu_from_diu_student,
            'know_the_diu_from_diu_employee':know_the_diu_from_diu_employee,
            'know_the_diu_from_others':know_the_diu_from_others,
            'is_parents_freedom_fighter':is_parents_freedom_fighter,
            'is_tribal':is_tribal,
            'is_physical_disorder':is_physical_disorder,
            'is_first_division_player':is_first_division_player,
            'passport':passport,
            'emergency_contact_info':emergency_contact_info,
            'passport_expire_date':passport_expire_date,
            'visa_no':visa_no,
            'visa_expire_date': visa_expire_date,
            # 'program_id': program_ids,         
            'applicant_type':applicant_type,
            # 'program_type_id':program_type_id,
            'last_completed_degree':last_completed_degree,
            
            
        })
        redirect = '/see_application'
        return request.redirect(redirect)
        # Render Form View
    @http.route('/application', auth='public', website=True)
    def hospital_patient_new(self, **kw):
            student = request.env['se.application'].sudo().search([])
            program = request.env['se.program'].sudo().search([]) 
            shift = request.env['se.education.shift'].sudo().search([]) 
            return request.render('smartedu_admission.application_form', {
                'student': student,
                'program': program,
                'shift': shift,
        })
        



