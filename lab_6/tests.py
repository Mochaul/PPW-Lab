from django.test import TestCase, Client

# Create your tests here.

class Lab6Test(TestCase):
    def test_lab_6_url_is_exist(self):
        response = Client().get('/lab-6/')
        self.assertEqual(response.status_code, 200)
