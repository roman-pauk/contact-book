export const required = value => (value || typeof value === 'number' ? undefined : 'This field is required!')

export const emailValidation = value => 
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)
        ? 'Email address is not correct'
        : undefined