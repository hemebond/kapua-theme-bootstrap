from django import template
from django.core.urlresolvers import reverse
from django.forms.widgets import Media
from django.forms import Form
from django.template import RequestContext

register = template.Library()

@register.simple_tag
def activenav(request, url):
	if reverse(url) in request.path:
		return "active"
	return ""

@register.simple_tag(takes_context=True)
def add_js(context, *args, **kwargs):
	js = Media()
	for arg in args:
		if isinstance(arg, Media):
			js += arg
		else:
			js += Media(js=[arg])

	if "media" in context.render_context:
		context.render_context['media'] += js
	else:
		context.render_context['media'] = js

	return ""

@register.simple_tag(takes_context=True)
def media(context):
	return context.render_context['media']
