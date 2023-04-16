import { z } from 'zod'

const mountSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  bitrate: z.number(),
  format: z.string(),
  listeners: z.object({
    total: z.number(),
    unique: z.number(),
    current: z.number()
  }),
  path: z.string(),
  is_default: z.boolean()
})

const songSchema = z.object({
  id: z.string(),
  text: z.string(),
  artist: z.string(),
  title: z.string(),
  album: z.string(),
  genre: z.string(),
  isrc: z.string(),
  lyrics: z.string(),
  art: z.string(),
  custom_fields: z.array(z.unknown())
})

export type Song = z.infer<typeof songSchema>

export const rawNowPlayingSchema = z.object({
  station: z.object({
    id: z.number(),
    name: z.string(),
    shortcode: z.string(),
    description: z.string(),
    frontend: z.string(),
    backend: z.string(),
    listen_url: z.string(),
    url: z.string(),
    public_player_url: z.string(),
    playlist_pls_url: z.string(),
    playlist_m3u_url: z.string(),
    is_public: z.boolean(),
    mounts: z.array(mountSchema),
    remotes: z.array(z.unknown()),
    hls_enabled: z.boolean(),
    hls_url: z.union([z.string(), z.null()]),
    hls_listeners: z.number()
  }),
  listeners: z.object({
    total: z.number(),
    unique: z.number(),
    current: z.number()
  }),
  live: z.object({
    is_live: z.boolean(),
    streamer_name: z.string(),
    broadcast_start: z.union([z.number(), z.null()]),
    art: z.unknown()
  }),
  now_playing: z.object({
    sh_id: z.number(),
    played_at: z.number(),
    duration: z.number(),
    playlist: z.string(),
    streamer: z.string(),
    is_request: z.boolean(),
    song: songSchema,
    elapsed: z.number(),
    remaining: z.number()
  })
})

export type RawNowPlaying = z.infer<typeof rawNowPlayingSchema>
