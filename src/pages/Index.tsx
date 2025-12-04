import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');

  const programs = [
    {
      id: 1,
      name: 'Математика и логика',
      description: 'Углубленное изучение математики, развитие логического мышления',
      age: '10-17 лет',
      duration: '9 месяцев',
      icon: 'Calculator',
      color: 'bg-purple-500'
    },
    {
      id: 2,
      name: 'Физика и астрономия',
      description: 'Экспериментальная физика, астрономические наблюдения',
      age: '12-17 лет',
      duration: '9 месяцев',
      icon: 'Atom',
      color: 'bg-violet-500'
    },
    {
      id: 3,
      name: 'Программирование',
      description: 'Python, веб-разработка, алгоритмы и структуры данных',
      age: '11-17 лет',
      duration: '9 месяцев',
      icon: 'Code',
      color: 'bg-fuchsia-500'
    },
    {
      id: 4,
      name: 'Биология и химия',
      description: 'Лабораторные работы, исследовательские проекты',
      age: '13-17 лет',
      duration: '9 месяцев',
      icon: 'FlaskConical',
      color: 'bg-purple-600'
    }
  ];

  const schedule = [
    { id: 1, program: 'Математика и логика', day: 'Понедельник', time: '15:00-17:00', teacher: 'Иванова А.П.', group: 'Группа А' },
    { id: 2, program: 'Физика и астрономия', day: 'Понедельник', time: '17:30-19:30', teacher: 'Петров В.И.', group: 'Группа Б' },
    { id: 3, program: 'Программирование', day: 'Вторник', time: '15:00-17:00', teacher: 'Сидоров Д.М.', group: 'Группа В' },
    { id: 4, program: 'Математика и логика', day: 'Вторник', time: '17:30-19:30', teacher: 'Иванова А.П.', group: 'Группа Г' },
    { id: 5, program: 'Биология и химия', day: 'Среда', time: '15:00-17:00', teacher: 'Смирнова Е.Н.', group: 'Группа Д' },
    { id: 6, program: 'Физика и астрономия', day: 'Среда', time: '17:30-19:30', teacher: 'Петров В.И.', group: 'Группа Е' },
    { id: 7, program: 'Программирование', day: 'Четверг', time: '15:00-17:00', teacher: 'Сидоров Д.М.', group: 'Группа Ж' },
    { id: 8, program: 'Биология и химия', day: 'Четверг', time: '17:30-19:30', teacher: 'Смирнова Е.Н.', group: 'Группа З' },
    { id: 9, program: 'Математика и логика', day: 'Пятница', time: '15:00-17:00', teacher: 'Иванова А.П.', group: 'Группа И' },
    { id: 10, program: 'Программирование', day: 'Пятница', time: '17:30-19:30', teacher: 'Сидоров Д.М.', group: 'Группа К' }
  ];

  const achievements = [
    { title: 'Победа на Всероссийской олимпиаде', count: 24, icon: 'Trophy', color: 'text-yellow-400' },
    { title: 'Медали международных конкурсов', count: 15, icon: 'Medal', color: 'text-purple-400' },
    { title: 'Гранты и стипендии', count: 31, icon: 'Award', color: 'text-violet-400' },
    { title: 'Публикации в научных журналах', count: 8, icon: 'BookOpen', color: 'text-fuchsia-400' }
  ];

  const news = [
    {
      id: 1,
      title: 'Открытие нового учебного сезона 2024-2025',
      date: '1 сентября 2024',
      description: 'Приглашаем всех желающих на день открытых дверей'
    },
    {
      id: 2,
      title: 'Наши ученики победили в региональной олимпиаде',
      date: '15 ноября 2024',
      description: '5 золотых медалей по математике и физике'
    },
    {
      id: 3,
      title: 'Запуск программы по искусственному интеллекту',
      date: '1 декабря 2024',
      description: 'Новый курс для продвинутых программистов'
    }
  ];

  const filteredSchedule = schedule.filter(item => {
    if (selectedProgram !== 'all' && item.program !== selectedProgram) return false;
    if (selectedDay !== 'all' && item.day !== selectedDay) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-violet-950 to-purple-900">
      <header className="bg-purple-950/80 backdrop-blur-sm border-b border-purple-400/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Центр "Гагарин"</h1>
                <p className="text-xs text-purple-300">Оренбургская область</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#programs" className="text-purple-200 hover:text-white transition story-link">Программы</a>
              <a href="#schedule" className="text-purple-200 hover:text-white transition story-link">Расписание</a>
              <a href="#achievements" className="text-purple-200 hover:text-white transition story-link">Достижения</a>
              <a href="#news" className="text-purple-200 hover:text-white transition story-link">Новости</a>
              <a href="#contacts" className="text-purple-200 hover:text-white transition story-link">Контакты</a>
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-purple-950 border-purple-400/20 text-white">
                <DialogHeader>
                  <DialogTitle>Регистрация на программу</DialogTitle>
                  <DialogDescription className="text-purple-300">
                    Заполните форму и мы свяжемся с вами в ближайшее время
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="name">Имя ребенка</Label>
                    <Input id="name" placeholder="Введите имя" className="bg-white/5 border-purple-400/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="age">Возраст</Label>
                    <Input id="age" type="number" placeholder="Введите возраст" className="bg-white/5 border-purple-400/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="parent">ФИО родителя</Label>
                    <Input id="parent" placeholder="Введите ФИО" className="bg-white/5 border-purple-400/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="bg-white/5 border-purple-400/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" className="bg-white/5 border-purple-400/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="program">Программа</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-purple-400/20 text-white">
                        <SelectValue placeholder="Выберите программу" />
                      </SelectTrigger>
                      <SelectContent className="bg-purple-950 border-purple-400/20 text-white">
                        {programs.map(program => (
                          <SelectItem key={program.id} value={program.name}>{program.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-400/30">
            Образовательный центр
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Центр выявления и поддержки<br />одаренных детей "Гагарин"
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Развиваем таланты детей в науке, технологиях и творчестве.<br />
            Готовим будущих ученых, изобретателей и лидеров.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 text-lg">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400/30 text-white hover:bg-white/10 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-purple-400/20 hover-scale cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Экспертные педагоги</CardTitle>
                <CardDescription className="text-purple-300">
                  Кандидаты и доктора наук, победители олимпиад, практикующие специалисты
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-purple-400/20 hover-scale cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Индивидуальный подход</CardTitle>
                <CardDescription className="text-purple-300">
                  Малые группы до 12 человек, персональные траектории развития
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-purple-400/20 hover-scale cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Практика и проекты</CardTitle>
                <CardDescription className="text-purple-300">
                  Реальные исследования, конкурсы, олимпиады, стажировки в ВУЗах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Образовательные программы</h3>
            <p className="text-purple-300 text-lg">Выберите направление для развития талантов вашего ребенка</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map(program => (
              <Card key={program.id} className="bg-white/5 border-purple-400/20 hover-scale cursor-pointer overflow-hidden group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon name={program.icon as any} className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{program.name}</CardTitle>
                      <CardDescription className="text-purple-300">{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-white/10 text-white border-0">
                      <Icon name="Calendar" className="mr-1" size={14} />
                      {program.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white border-0">
                      <Icon name="UserCheck" className="mr-1" size={14} />
                      {program.age}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Расписание занятий</h3>
            <p className="text-purple-300 text-lg">Выберите удобное время для обучения</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Label htmlFor="program-filter" className="text-white mb-2 block">Программа</Label>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger id="program-filter" className="bg-white/5 border-purple-400/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-purple-950 border-purple-400/20 text-white">
                  <SelectItem value="all">Все программы</SelectItem>
                  {programs.map(program => (
                    <SelectItem key={program.id} value={program.name}>{program.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="day-filter" className="text-white mb-2 block">День недели</Label>
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger id="day-filter" className="bg-white/5 border-purple-400/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-purple-950 border-purple-400/20 text-white">
                  <SelectItem value="all">Все дни</SelectItem>
                  <SelectItem value="Понедельник">Понедельник</SelectItem>
                  <SelectItem value="Вторник">Вторник</SelectItem>
                  <SelectItem value="Среда">Среда</SelectItem>
                  <SelectItem value="Четверг">Четверг</SelectItem>
                  <SelectItem value="Пятница">Пятница</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredSchedule.map(item => (
              <Card key={item.id} className="bg-white/5 border-purple-400/20 hover-scale cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-2">{item.program}</h4>
                      <div className="flex gap-4 flex-wrap text-sm text-purple-300">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          {item.day}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {item.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={16} />
                          {item.teacher}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 w-fit">
                      {item.group}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Достижения наших учеников</h3>
            <p className="text-purple-300 text-lg">Результаты за 2024 год</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/5 border-purple-400/20 text-center hover-scale cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                    <Icon name={achievement.icon as any} className={achievement.color} size={32} />
                  </div>
                  <CardTitle className="text-4xl font-bold text-white mb-2">{achievement.count}</CardTitle>
                  <CardDescription className="text-purple-300">{achievement.title}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Новости центра</h3>
            <p className="text-purple-300 text-lg">Следите за нашими событиями и достижениями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map(item => (
              <Card key={item.id} className="bg-white/5 border-purple-400/20 hover-scale cursor-pointer">
                <CardHeader>
                  <Badge className="w-fit bg-purple-500/20 text-purple-300 border-purple-400/30 mb-3">
                    <Icon name="Calendar" className="mr-1" size={14} />
                    {item.date}
                  </Badge>
                  <CardTitle className="text-white text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-purple-300">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 h-auto">
                    Подробнее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Контакты</h3>
            <p className="text-purple-300 text-lg">Свяжитесь с нами для получения дополнительной информации</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-purple-400/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white mb-2">Адрес</CardTitle>
                <CardDescription className="text-purple-300">
                  Оренбургская область,<br />г. Оренбург, ул. Гагарина, 1
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-purple-400/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white mb-2">Телефон</CardTitle>
                <CardDescription className="text-purple-300">
                  +7 (3532) 123-456<br />
                  +7 (900) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-purple-400/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white mb-2">Email</CardTitle>
                <CardDescription className="text-purple-300">
                  info@gagarin-orenburg.ru<br />
                  admissions@gagarin-orenburg.ru
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-purple-400/20 bg-purple-950">
        <div className="container mx-auto text-center text-purple-300">
          <p>© 2024 Центр "Гагарин" • Оренбургская область</p>
          <p className="mt-2 text-sm">Развиваем будущее вместе 🚀</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
