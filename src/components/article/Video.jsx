export default function Video({
  src,
  title = "Video",
  caption,
}) {
  if (!src) {
    return null;
  }

  return (
    <figure className="overflow-hidden">
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-black shadow-[var(--shadow-sm)]">
        <video
          src={src}
          title={title}
          controls
          playsInline
          className="block aspect-video w-full"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-[11px] leading-5 text-[var(--text-tertiary)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}