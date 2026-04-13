

export const changeFormat = (time) => {
    const newDate = new Date(time);
    const formatted = newDate.toLocaleString('en-GB', {
        month: 'short',
        day: 'numeric'
    })
    return formatted
};

export const sortCard = (bookmarks, sortBy) => {
    switch (sortBy) {
        case 'recently_added':
            return bookmarks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        case 'recently_visited':
            return bookmarks.sort((a,b) => new Date(b.lastVisited) - new Date(a.lastVisited));
        
        case 'most_visited':
            return bookmarks.sort((a,b) => b.visitCount - a.visitCount );
        default:
            return bookmarks
    }
}