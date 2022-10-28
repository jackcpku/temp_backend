import Jabber from "jabber";
import _ from "underscore";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const tags = [
  "tech",
  "music",
  "sports",
  "financial",
  "health",
  "entertainment",
];

export const dynamicFeeds = (feedsNum) => {
  const feeds = [];
  const jabber = new Jabber();
  for (let i = 0; i < feedsNum; i++) {
    const feed = {
      _id: i,
      link: "https://example.com",
      title: jabber.createParagraph(8),
      author: jabber.createFullName(),
      created_at: "2022-10-24",
      tags: _.sample(tags, getRandomInt(1, 3)),
    };
    feeds.push(feed);
  }

  return { feeds };
};

export const constFeeds = () => ({
  feeds: [
    {
      _id: 1,
      link: "https://capitalandmain.com/shining-a-light-on-digital-divide-for-seniors",
      title: "Shining a Light on Digital Divide for Seniors",
      author: "Larry Buhl",
      created_at: "2022-10-17",
    },
    {
      _id: 2,
      link: "https://capitalandmain.com/abigail-disneys-dream-living-wages-for-workers",
      title: "Abigail Disney’s Dream: Living Wages for Workers",
      author: "Peter Hong",
      created_at: "2022-10-13",
    },
  ],
});
