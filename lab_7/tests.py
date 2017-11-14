from django.test import TestCase
from django.test import Client
from django.urls import resolve
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models.manager import Manager
from unittest.mock import patch
from .views import (
	index, add_friend, validate_npm, delete_friend, friend_list,
	get_friend_list, friend_description, paginate_page
)
from .models import Friend
from .api_csui_helper.csui_helper import CSUIhelper

# Create your tests here.
class lab7UnitTest(TestCase):
	def test_lab_7_url_is_exist(self):
		response = Client().get('/lab-7/')
		self.assertEqual(response.status_code, 200)

	def test_lab7_using_index_func(self):
		found = resolve('/lab-7/')
		self.assertEqual(found.func, index)

	def test_friend_list_url_is_exist(self):
		response = Client().get('/lab-7/friend-list/')
		self.assertEqual(response.status_code, 200)

	def test_get_friend_list_data_url_is_exist(self):
	    response = Client().get('/lab-7/get-friend-list/')
	    self.assertEqual(response.status_code, 200)

	def test_friend_description_url_is_exist(self):
	    friend = Friend.objects.create(friend_name="Pina Korata", npm="1606123456")
	    response = Client().post('/lab-7/detail/' + str(friend.id) + '/')
	    self.assertEqual(response.status_code, 200)

	def test_auth_param_dict(self):
	    csui_helper = CSUIhelper()
	    auth_param = csui_helper.instance.get_auth_param_dict()
	    self.assertEqual(auth_param['client_id'], csui_helper.instance.get_auth_param_dict()['client_id'])

	def test_add_friend(self):
	    response_post = Client().post(
	        '/lab-7/add-friend/',
	        {'name': "maap", 'npm': "1606", 'alamat': " ", 'ttl': " ", 'prodi': " "}
	    )
	    self.assertEqual(response_post.status_code, 200)

	def test_invalid_sso(self):
	    csui_helper = CSUIhelper()
	    csui_helper.instance.username = "maap"
	    csui_helper.instance.password = "maap"
	    with self.assertRaises(Exception) as context:
	        csui_helper.instance.get_access_token()
	    self.assertIn("maap", str(context.exception))

	def test_validate_npm(self):
	    response = self.client.post('/lab-7/validate-npm/')
	    html_response = response.content.decode('utf8')
	    self.assertEqual(response.status_code, 200)
	    self.assertJSONEqual(html_response, {'is_taken': False})

	def test_delete_friend(self):
	    friend = Friend.objects.create(friend_name="Pina Korata", npm="1606123456")
	    response = Client().post('/lab-7/delete/' + str(friend.id) + '/')
	    self.assertEqual(response.status_code, 302)
	    self.assertNotIn(friend, Friend.objects.all())

	def test_can_get_mahasiswa_list(self):
	    csui_helper = CSUIhelper()
	    mhs_list = csui_helper.instance.get_mahasiswa_list()
	    self.assertIsNotNone(mhs_list)
