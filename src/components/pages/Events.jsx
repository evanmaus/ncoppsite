export default function Events() {
  return (
    <div>
      <p class="pt-20 text-center font-serif text-4xl font-bold">
        Upcoming Events
      </p>
      <iframe
        class="flex w-10/12 h-52 m-auto"
        src="https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FNew_York&bgcolor=%2366aaff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZXZhbm1hdXMxQGdtYWlsLmNvbQ&color=%23D81B60"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  )
}
