from django import template
from django.core.urlresolvers import reverse
from django.conf import settings

import bleach

register = template.Library()

@register.simple_tag
def activenav(request, url):
	if reverse(str(url)) in request.path:
		return "active"
	return ""


@register.filter
def clean(value):
	"""
		Runs the value through Bleach.
	"""
	return bleach.clean(value, tags=settings.BLEACH_ALLOWED_TAGS)


@register.filter
def get(value, arg):
	print arg
	field = getattr(value, arg)
	print dir(field)
	print type(field)
	try:
		f = "get_%s_display" % arg
		fun = getattr(value, f)
		return fun()
	except:
		pass

	try:
		return "%s (b)" % getattr(value, arg)
	except:
		return ""

@register.tag
def datatable(parser, token):
	tokens = token.split_contents()[1:]
	object_list = tokens[0]
	object_fields = tokens[1:]

	print object_list
	print object_fields

	return DatatableNode(object_list, object_fields)

class DatatableNode(template.Node):
	def __init__(self, object_list_var, object_fields):
		self.object_list_var = object_list_var
		self.object_fields = object_fields

	def render(self, context):
		object_list = context[self.object_list_var]
		object_fields = self.object_fields
		object_field_names = [
			object_list.model._meta.get_field(f).verbose_name
			for f
			in object_fields
		]
		return "<p>%s</p>" % ",".join(object_field_names)