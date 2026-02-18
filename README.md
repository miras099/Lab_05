# Lab 05 — TypeScript & Props Validation


## Lab 5.1 — Typed Components & Props

Проект переведен с JavaScript на TypeScript (.tsx).

### Реализовано:

- strict mode включен в tsconfig.json
- types.ts содержит:
  - interface User
  - interface Skill
  - union type SkillLevel
- UserCard:
  - user: User
  - isActive?: boolean (optional prop)
  - children: React.ReactNode
- SkillList:
  - skills: Skill[]
  - Условный цвет в зависимости от SkillLevel

### Основные принципы:

- Интерфейсы используются для описания объектов
- type используется для union типов
- Props строго типизированы
- Нет использования any
- Все компоненты компилируются без ошибок

---

## Lab 5.2 — Typed State & Event Handlers

Реализован компонент поиска пользователей с полной типизацией.

### Реализовано:

- useState<User[]>(INITIAL_DATA)
- useState<string> для searchTerm
- React.ChangeEvent<HTMLInputElement> для onChange
- React.MouseEvent<HTMLButtonElement> для onClick
- Отображение "No results found" при пустом списке

### Почему используется React.ChangeEvent?

React.ChangeEvent<HTMLInputElement> позволяет безопасно
использовать event.target.value. TypeScript гарантирует,
что у события есть нужные свойства.

### Когда нужны generics?

useState<User[]>([]) требует явного указания типа,
потому что TypeScript не может вывести тип из пустого массива.
Если передано значение (например useState("")),
TypeScript сам определяет тип.


## Запуск проекта

В каждой папке:

```bash
npm install
npm run dev
