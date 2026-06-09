'use client';

import React, { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Sparkles, Instagram } from 'lucide-react';
import usePersistedState from '@/hooks/use-persisted-state';

// Example notification — dormant until the 2026 announcement window opens.
const NOTIFICATIONS = [
  {
    id: 'ba26-stay-tuned',
    title: 'BoulderActive 2026 is coming',
    message:
      "Registration and event details drop soon — follow @nusboulderactive so you don't miss it.",
    type: 'info',
    icon: Sparkles,
    action: {
      label: 'Follow',
      icon: Instagram,
      onClick: () => {
        window.open(
          'https://www.instagram.com/nusboulderactive/',
          '_blank',
          'noopener,noreferrer',
        );
      },
    },
    showFrom: new Date('2026-07-01'),
    showUntil: new Date('2026-10-31'),
  },
];

const STORAGE_KEY = 'dismissed-notifications';

export function NotificationManager() {
  const [dismissedNotifications, setDismissedNotifications] = usePersistedState(STORAGE_KEY, []);
  const hasShownNotifications = useRef(false);

  useEffect(() => {
    const now = new Date();

    // Only show notifications once per page load
    if (hasShownNotifications.current) return;

    // Filter out already dismissed notifications
    const notificationsToShow = NOTIFICATIONS.filter(
      notification =>
        !dismissedNotifications.includes(notification.id) &&
        notification.showFrom < now &&
        notification.showUntil > now,
    );

    // Show each notification that hasn't been dismissed
    notificationsToShow.forEach(notification => {
      const IconComponent = notification.icon;

      setTimeout(() =>
        toast(notification.title, {
          id: notification.id,
          duration: Infinity,
          position: 'top-right',
          className: 'group',
          description: notification.message,
          icon: <IconComponent className="w-5 h-5" />,
          action: notification.action
            ? {
                label: (
                  <div className="flex items-center gap-2">
                    <notification.action.icon className="w-4 h-4" />
                    {notification.action.label}
                  </div>
                ),
                onClick: notification.action.onClick,
              }
            : undefined,
          onDismiss: () => {
            setDismissedNotifications(notification.id);
          },
          closeButton: true,
        }),
      );
    });

    hasShownNotifications.current = true;
  }, [dismissedNotifications, setDismissedNotifications]);

  return null;
}
