export const changeFormat = (time) => {
    const newDate = new Date(time);
    return newDate.toLocaleString('en-GB', {
        month: 'short',
        day: 'numeric'
    });
};

export const sortCard = (bookmarks, sortBy) => {
    switch (sortBy) {
        case 'recently_added':
            return bookmarks.sort((a, b) => new Date(b.createdAtRaw) - new Date(a.createdAtRaw));

        case 'recently_visited':
            return bookmarks.sort((a, b) => new Date(b.lastVisitedRaw) - new Date(a.lastVisitedRaw));

        case 'most_visited':
            return bookmarks.sort((a, b) => b.visitCount - a.visitCount);

        default:
            return bookmarks;
    }
};