// birthdaysController.js - Versión corregida
const birthdaysData = [
  { day: 12, month: 'Mayo', name: 'Naniw' },
  { day: 18, month: 'Diciembre', name: 'Oscar' },
  { day: 1, month: 'Noviembre', name: 'Chris' },
  { day: 29, month: 'Diciembre', name: 'Solorio' },
  { day: 7, month: 'Junio', name: 'Kira' },
  { day: 31, month: 'Mayo', name: 'Fénix' },
  { day: 12, month: 'Enero', name: 'Yaelo' },
  { day: 15, month: 'Septiembre', name: 'Ioryds' },
  { day: 22, month: 'Enero', name: 'Ami' },
  { day: 23, month: 'Febrero', name: 'Roberto' },
  { day: 3, month: 'Abril', name: 'Ricky' },
  { day: 13, month: 'Agosto', name: 'Luis' },
  { day: 5, month: 'Julio', name: 'Ralph' },
  { day: 2, month: 'Octubre', name: 'Jedi' },
];

exports.getAllBirthdays = (req, res) => {
  res.render('all-birthdays', { 
    title: 'Todos los cumpleaños',
    birthdays: birthdaysData 
  });
};

exports.filterByMonth = (req, res) => {
  const month = req.params.month;
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  
  const filtered = birthdaysData.filter(b => 
    b.month.toLowerCase() === month.toLowerCase()
  );
  
  res.render('month-birthdays', { 
    title: `Cumpleaños en ${monthCapitalized}`,
    month: monthCapitalized,
    birthdays: filtered 
  });
};
