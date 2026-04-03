# Chase S. Electona — Creative Portfolio

A Django-based portfolio website for a graphic designer and animator.

## Design
- **Aesthetic**: Dark editorial / art-gallery — ink-black background, warm amber/gold accents
- **Fonts**: Cormorant Garamond (serif display) + DM Sans (body) + DM Mono (labels)
- **Layout**: Side navigation, split-screen hero, masonry-style works grid

## Stack
- Python / Django
- SQLite (included)
- Bootstrap Icons (CDN)
- Google Fonts (CDN)
- No extra npm/node needed

## Setup
```bash
pip install django pillow
python manage.py migrate
python manage.py runserver
```

## Admin Panel
Visit: http://127.0.0.1:8000/admin/
- Username: admin
- Password: admin123

**Sections manageable from admin:**
- Profile (name, tagline, about, career goals, social links, photo)
- Works (ID Design, Poster, Animation, Logo — with image, tools, Behance link)
- Skills (Graphic Design, Animation, Tools & Software categories with proficiency %)
- Education (school, degree, years, description)
- Contact Messages (read incoming messages)

## Pages
| URL | Page |
|-----|------|
| / | Home (hero + featured works) |
| /about/ | About Me |
| /works/ | All Works (filterable by type) |
| /skills/ | Skills & Expertise |
| /education/ | Education Timeline |
| /contact/ | Contact Form |

## Notes
- Change `SECRET_KEY` in `chaseportfolio/settings.py` before deploying
- Upload profile photo and work images via Admin → Profile / Works
