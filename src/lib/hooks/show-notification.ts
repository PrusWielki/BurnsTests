import notificationMessage from '$lib/store/notification';

export const showNotification = (message: string, time: number) => {
	notificationMessage.set(message);
	setTimeout(() => {
		notificationMessage.set('');
	}, time);
};
