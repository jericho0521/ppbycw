import React, { useCallback, useEffect, useRef, useState } from 'react';
import { eventsData } from '../../Data/eventsData';
import styles from './PastEvents.module.css';

const clampIndex = (index, imageCount) => Math.min(Math.max(index, 0), imageCount - 1);

function PastEvents() {
    const [viewer, setViewer] = useState(null);
    const touchStartX = useRef(null);

    const closeViewer = useCallback(() => {
        setViewer(null);
    }, []);

    const moveViewer = useCallback((offset) => {
        setViewer((currentViewer) => {
            if (!currentViewer) return currentViewer;

            return {
                ...currentViewer,
                currentIndex: clampIndex(
                    currentViewer.currentIndex + offset,
                    currentViewer.images.length
                )
            };
        });
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeViewer();
            if (event.key === 'ArrowRight') moveViewer(1);
            if (event.key === 'ArrowLeft') moveViewer(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeViewer, moveViewer]);

    const openViewer = (images, currentIndex) => {
        setViewer({ images, currentIndex });
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const distance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        if (distance < -50) moveViewer(1);
        if (distance > 50) moveViewer(-1);
    };

    return (
        <>
            {eventsData.map((event, eventIndex) => (
                <div className={styles.rowBar} key={event.id}>
                    <div className={styles.pastEvents}>
                        {eventIndex === 0 && <h1>PAST EVENTS</h1>}
                        <div className={styles.eventHeader}>
                            <span
                                aria-hidden="true"
                                className={styles.eventNumberBadge}
                                data-event-number={String(eventIndex + 1).padStart(2, '0')}
                            />
                            <h3>{event.title}</h3>
                        </div>
                        <div className={styles.innerText}>
                            <p>{event.description}</p>
                            {event.additionalInfo && (
                                <ul>
                                    {event.additionalInfo.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className={styles.imageGrid}>
                            {event.images.map((image, imageIndex) => (
                                <div
                                    className={styles.imageWrapper}
                                    key={image}
                                    onClick={() => openViewer(event.images, imageIndex)}
                                >
                                    <img
                                        className={styles.imageItem}
                                        src={image}
                                        alt={`${event.title} ${imageIndex + 1}`}
                                        loading="lazy"
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {viewer && (
                <div
                    aria-label="Event image viewer"
                    aria-modal="true"
                    className={styles.lightboxOverlay}
                    onClick={closeViewer}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    role="dialog"
                >
                    <button
                        aria-label="Close lightbox"
                        className={styles.lightboxClose}
                        onClick={closeViewer}
                    >
                        ✕
                    </button>
                    <button
                        aria-label="Previous image"
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        disabled={viewer.currentIndex === 0}
                        onClick={(event) => {
                            event.stopPropagation();
                            moveViewer(-1);
                        }}
                    >
                        ‹
                    </button>
                    <img
                        alt={`Event ${viewer.currentIndex + 1} of ${viewer.images.length}`}
                        className={styles.lightboxImage}
                        onClick={(event) => event.stopPropagation()}
                        src={viewer.images[viewer.currentIndex]}
                    />
                    <button
                        aria-label="Next image"
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        disabled={viewer.currentIndex === viewer.images.length - 1}
                        onClick={(event) => {
                            event.stopPropagation();
                            moveViewer(1);
                        }}
                    >
                        ›
                    </button>
                    <span className={styles.lightboxCounter}>
                        {viewer.currentIndex + 1} / {viewer.images.length}
                    </span>
                </div>
            )}
        </>
    );
}

export default PastEvents;
