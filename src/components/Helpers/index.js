import React from "react";

export const getCounters = () =>
    fetch('/api/v1/counter', { method: 'get' })
        .then(res => res.json());
