from django.test import TestCase, Client

# Create your tests here.

class Lab6Test(TestCase):
    def test_lab_6_url_is_exist(self):
        response = Client().get('/lab-6/')
        self.assertEqual(response.status_code, 200)

    def test_root_url_now_is_using_index_page_from_lab_6(self):
        response = Client().get('/')
        self.assertEqual(response.status_code, 301)
        self.assertRedirects(response, '/lab-6/', 301, 200)
