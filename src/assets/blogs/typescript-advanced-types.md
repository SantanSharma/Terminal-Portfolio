# Advanced TypeScript Types You Should Know

## Introduction

TypeScript's type system is incredibly powerful. Let's explore some advanced types that can make your code more type-safe and expressive.

## 1. Utility Types

### Partial<T>
Makes all properties optional:

```typescript
interface User {
  name: string;
  email: string;
  age: number;
}

type PartialUser = Partial<User>;
// All properties are now optional
```

### Pick<T, K>
Select specific properties:

```typescript
type UserPreview = Pick<User, 'name' | 'email'>;
// Only name and email
```

### Omit<T, K>
Exclude specific properties:

```typescript
type UserWithoutAge = Omit<User, 'age'>;
```

## 2. Conditional Types

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

## 3. Mapped Types

Transform properties:

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyUser = Readonly<User>;
```

## 4. Template Literal Types

```typescript
type Event = 'click' | 'focus' | 'blur';
type EventHandler = `on${Capitalize<Event>}`;
// 'onClick' | 'onFocus' | 'onBlur'
```

## 5. Discriminated Unions

```typescript
type Success = {
  status: 'success';
  data: any;
};

type Error = {
  status: 'error';
  message: string;
};

type Result = Success | Error;

function handleResult(result: Result) {
  if (result.status === 'success') {
    // TypeScript knows result is Success
    console.log(result.data);
  } else {
    // TypeScript knows result is Error
    console.log(result.message);
  }
}
```

## 6. Index Signatures with Template Literals

```typescript
type DynamicKeys = {
  [key: `data-${string}`]: string;
};

const attrs: DynamicKeys = {
  'data-id': '123',
  'data-name': 'test',
};
```

## Conclusion

These advanced TypeScript features enable you to write more robust and maintainable code. Practice using them in your projects!

**Tags:** TypeScript, Programming, Advanced
