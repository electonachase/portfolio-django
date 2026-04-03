from django.contrib import admin
from .models import Profile, Skill, Project, Education, ContactMessage


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'tagline')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency', 'order')
    list_editable = ('proficiency', 'order')
    list_filter = ('category',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'work_type', 'featured', 'order')
    list_editable = ('featured', 'order')
    list_filter = ('work_type',)


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('school', 'degree', 'year_start', 'year_end', 'order')
    list_editable = ('order',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'sent_at', 'is_read')
    list_filter = ('is_read',)
    readonly_fields = ('name', 'email', 'subject', 'message', 'sent_at')


# Customize admin panel branding
from django.contrib.admin import AdminSite
AdminSite.site_header  = "Chase S. Electona — Portfolio Admin"
AdminSite.site_title   = "Chase Portfolio Admin"
AdminSite.index_title  = "Portfolio Management Panel"
