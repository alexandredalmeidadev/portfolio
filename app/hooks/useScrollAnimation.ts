"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll animation hook using IntersectionObserver.
 * Adds the class `is-visible` when the element enters the viewport.
 * No external library — pure CSS + JS.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    options?: IntersectionObserverInit
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.unobserve(el); // fire once only
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
