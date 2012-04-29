from django import template
from django.core.urlresolvers import reverse
from django.forms.widgets import Media
from django.forms import Form
from django.template import RequestContext
import bleach
from django.conf import settings

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
