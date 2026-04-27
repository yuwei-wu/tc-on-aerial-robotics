import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";

const HomepageTab = ({ homepage_tab }) => {
  const { title, description, tab_list } = homepage_tab;
  return (
    <div className="row py-10">
      <div className="col-12">
        <div className="w-full">
          <h2
            className="lg:text-4xl"
            dangerouslySetInnerHTML={{ __html: markdownify(title) }}
          />
          <div
            className="mt-4 mb-8"
            dangerouslySetInnerHTML={{ __html: markdownify(description) }}
          />
          <div className="mt-6 grid gap-6">
            {tab_list.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-white p-6"
              >
                <h3 className="h5 mb-3 flex items-center">
                  <DynamicIcon
                    icon={item.icon}
                    className="mr-3 h-6 w-4 text-primary"
                  />
                  {item.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: markdownify(item.content) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageTab;
