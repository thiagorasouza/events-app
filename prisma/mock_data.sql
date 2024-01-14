-- Run PSQL on the same container network
-- sudo service docker start
-- docker-compose up -d
-- docker run --rm -it --network events-app_default postgres psql -h postgres -p 5432 -U postgres -d events
-- passwd admin123

-- Mock Users
INSERT INTO "User" ("clerkId", "name", "email", "bio", "picture_url") VALUES
    ('clerk1', 'John Doe', 'john.doe@example.com', 'Bio 1 - John Doe', 'https://randomuser.me/api/portraits/men/1.jpg'),
    ('clerk2', 'Alice Smith', 'alice.smith@example.com', 'Bio 2 - Alice Smith', 'https://randomuser.me/api/portraits/women/2.jpg'),
    ('clerk3', 'Bob Johnson', 'bob.johnson@example.com', 'Bio 3 - Bob Johnson', 'https://randomuser.me/api/portraits/men/3.jpg'),
    ('clerk4', 'Emma White', 'emma.white@example.com', 'Bio 4 - Emma White', 'https://randomuser.me/api/portraits/women/4.jpg'),
    ('clerk5', 'Michael Brown', 'michael.brown@example.com', 'Bio 5 - Michael Brown', 'https://randomuser.me/api/portraits/men/5.jpg'),
    ('clerk6', 'Olivia Davis', 'olivia.davis@example.com', 'Bio 6 - Olivia Davis', 'https://randomuser.me/api/portraits/women/6.jpg'),
    ('clerk7', 'Daniel Garcia', 'daniel.garcia@example.com', 'Bio 7 - Daniel Garcia', 'https://randomuser.me/api/portraits/men/7.jpg'),
    ('clerk8', 'Sophia Martinez', 'sophia.martinez@example.com', 'Bio 8 - Sophia Martinez', 'https://randomuser.me/api/portraits/women/8.jpg'),
    ('clerk9', 'Ethan Jackson', 'ethan.jackson@example.com', 'Bio 9 - Ethan Jackson', 'https://randomuser.me/api/portraits/men/9.jpg'),
    ('clerk10', 'Isabella Taylor', 'isabella.taylor@example.com', 'Bio 10 - Isabella Taylor', 'https://randomuser.me/api/portraits/women/10.jpg');

-- Mock Categories
INSERT INTO "Category" ("name") VALUES
    ('Music'),
    ('Technology'),
    ('Sports'),
    ('Food & Drink'),
    ('Art'),
    ('Science');

-- Mock Events
INSERT INTO "Event" ("title", "description", "location", "startDateTime", "endDateTime", "image_url", "external_url", "categoryId", "organizerId") VALUES
    ('Concert in the Park', 'Enjoy live music in the park', 'Central Park', '2024-01-13 18:00:00', '2024-01-13 22:00:00', 'https://source.unsplash.com/800x600/?concert', 'https://example.com/concert', 1, 1),
    ('Tech Expo 2024', 'Explore the latest in technology', 'Tech Convention Center', '2024-01-14 09:00:00', '2024-01-14 17:00:00', 'https://source.unsplash.com/800x600/?technology', 'https://example.com/tech-expo', 2, 2),
    ('Sports Tournament', 'Cheer for your favorite teams', 'Stadium Arena', '2024-01-15 14:00:00', '2024-01-15 20:00:00', 'https://source.unsplash.com/800x600/?sports', 'https://example.com/sports-tournament', 3, 3),
    ('Food Festival', 'Taste delicious cuisines from around the world', 'City Square', '2024-01-16 12:00:00', '2024-01-16 20:00:00', 'https://source.unsplash.com/800x600/?food', 'https://example.com/food-festival', 4, 4),
    ('Art Exhibition', 'Explore creative masterpieces', 'Art Gallery', '2024-01-17 10:00:00', '2024-01-17 18:00:00', 'https://source.unsplash.com/800x600/?art', 'https://example.com/art-exhibition', 5, 5),
    ('Science Fair', 'Discover the wonders of science', 'Science Museum', '2024-01-18 09:00:00', '2024-01-18 16:00:00', 'https://source.unsplash.com/800x600/?science', 'https://example.com/science-fair', 6, 6),
    ('Gaming Expo', 'Experience the latest in gaming technology', 'Gaming Convention Center', '2024-01-19 10:00:00', '2024-01-19 18:00:00', 'https://source.unsplash.com/800x600/?gaming', 'https://example.com/gaming-expo', 2, 7),
    ('Fashion Show', 'Witness the latest trends on the runway', 'Fashion Arena', '2024-01-20 15:00:00', '2024-01-20 21:00:00', 'https://source.unsplash.com/800x600/?fashion', 'https://example.com/fashion-show', 5, 8);


INSERT INTO "Event" ("title", "description", "location", "startDateTime", "endDateTime", "image_url", "external_url", "categoryId", "organizerId") VALUES
    ('Fitness Challenge', 'Join the ultimate fitness competition', 'Fitness Park', '2024-01-21 08:00:00', '2024-01-21 12:00:00', 'https://source.unsplash.com/800x600/?fitness', 'https://example.com/fitness-challenge', 3, 9),
    ('Movie Night', 'Enjoy an outdoor movie night under the stars', 'Open Field', '2024-01-22 19:00:00', '2024-01-22 23:00:00', 'https://source.unsplash.com/800x600/?movie', 'https://example.com/movie-night', 1, 10),
    ('Tech Startup Summit', 'Connect with innovative tech startups', 'Startup Hub', '2024-01-23 11:00:00', '2024-01-23 16:00:00', 'https://source.unsplash.com/800x600/?startup', 'https://example.com/startup-summit', 2, 6),
    ('Wine Tasting', 'Savor a variety of exquisite wines', 'Vineyard Estate', '2024-01-24 14:00:00', '2024-01-24 18:00:00', 'https://source.unsplash.com/800x600/?wine', 'https://example.com/wine-tasting', 4, 5),
    ('Book Fair', 'Explore a world of literature', 'City Library', '2024-01-25 09:00:00', '2024-01-25 17:00:00', 'https://source.unsplash.com/800x600/?books', 'https://example.com/book-fair', 5, 2),
    ('Photography Exhibition', 'Admire captivating photography', 'Photography Gallery', '2024-01-26 12:00:00', '2024-01-26 20:00:00', 'https://source.unsplash.com/800x600/?photography', 'https://example.com/photo-exhibition', 5, 3),
    ('Environmental Summit', 'Discuss and address environmental challenges', 'Green Conference Center', '2024-01-27 10:00:00', '2024-01-27 16:00:00', 'https://source.unsplash.com/800x600/?environment', 'https://example.com/environmental-summit', 6, 1),
    ('Craft Beer Festival', 'Enjoy a variety of craft beers', 'Brewery Park', '2024-01-28 17:00:00', '2024-01-28 22:00:00', 'https://source.unsplash.com/800x600/?beer', 'https://example.com/beer-festival', 4, 4);

-- Additional Attendees
INSERT INTO "_attendees" ("A", "B") VALUES
    (11, 2), (11, 3), (11, 4), (12, 1), (12, 2), (13, 3), (13, 4), (13, 5),
    (14, 6), (14, 7), (15, 8), (15, 9), (16, 10), (16, 1),
    (1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (3, 6), (3, 7), (3, 8),
    (4, 1), (4, 2), (4, 3), (5, 1), (5, 2), (6, 3), (6, 4), (6, 5),
    (7, 1), (7, 2), (8, 3), (8, 4), (8, 5), (9, 6), (9, 7), (10, 8);
