import axios from "axios";

const api = axios.create({
  baseURL: "api/",
  validateStatus: (status) => {
    return status == 200;
  },
});

const deezer = {
  search: async (q: string, limit = 25) => {
    try {
      const { data } = await api.get("search", {
        params: {
          q,
          limit,
        },
      });

      return data;
    } catch (error) {
      console.log("error search", error);
    }
  },
  searchPlaylist: async (q: string, limit = 10) => {
    try {
      const { data } = await api.get(`search/playlist`, {
        params: { q, limit },
      });

      return data;
    } catch (error) {
      console.log("error load search playlist", error);
    }
  },
  searchAlbum: async (q: string, limit = 10) => {
    try {
      const { data } = await api.get(`search/album`, {
        params: { q, limit },
      });

      return data;
    } catch (error) {
      console.log("error load search album", error);
    }
  },
  searchArtist: async (q: string, limit = 10) => {
    try {
      const { data } = await api.get(`search/artist`, {
        params: { q, limit },
      });

      return data;
    } catch (error) {
      console.log("error load search album", error);
    }
  },
  getEditorialChart: async (genre: number = 0) => {
    try {
      const { data } = await api.get(`editorial/${genre}/charts`);

      return data;
    } catch (error) {
      console.log("error load editorial", error);
    }
  },
  getTops: async (limit: number = 10) => {
    try {
      return await deezer.getPlaylist("1111141961", limit);
    } catch (error) {
      console.log("error in load getTops", error);
    }
  },
  getPlaylist: async (id: string | null, limit: number = 50) => {
    try {
      const { data } = await api.get(`playlist/${id}`, {
        params: {
          limit,
        },
      });

      return data;
    } catch (error) {
      console.log("error load playlist", error);
    }
  },
  getArtist: async (id: string | null) => {
    try {
      const { data } = await api.get(`artist/${id}`);

      return data;
    } catch (error) {
      console.log("error load artist getArtist", error);
    }
  },
  getArtistTopTrack: async (id: string | null, limit = 100) => {
    try {
      const { data } = await api.get(`artist/${id}/top?limit=${limit}`);

      return data;
    } catch (error) {
      console.log("error load track artist", error);
    }
  },
  getGenre: async () => {
    try {
      const { data } = await api.get(`genre`);

      return data;
    } catch (error) {
      console.log("error load genre", error);
    }
  },
  getAlbum: async (id: string | null) => {
    try {
      const { data } = await api.get(`album/${id}`);

      return data;
    } catch (error) {
      console.log("error load genre", error);
    }
  },
};

export { deezer };
